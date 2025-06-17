var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// shared/schema.ts
var schema_exports = {};
__export(schema_exports, {
  insertMenuItemSchema: () => insertMenuItemSchema,
  insertUserSchema: () => insertUserSchema,
  menuItems: () => menuItems,
  users: () => users
});
import { pgTable, text, serial, integer, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var menuItems = pgTable("menu_items", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  category: text("category").notNull(),
  icon: text("icon").notNull(),
  available: integer("available").default(1).notNull()
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});
var insertMenuItemSchema = createInsertSchema(menuItems).omit({
  id: true
});

// server/db.ts
import { Pool, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
neonConfig.webSocketConstructor = ws;
if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?"
  );
}
var pool = new Pool({ connectionString: process.env.DATABASE_URL });
var db = drizzle({ client: pool, schema: schema_exports });

// server/storage.ts
import { eq } from "drizzle-orm";
var DatabaseStorage = class {
  async getUser(id) {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || void 0;
  }
  async getUserByUsername(username) {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || void 0;
  }
  async createUser(insertUser) {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }
  async getMenuItems() {
    return await db.select().from(menuItems);
  }
  async getMenuItemsByCategory(category) {
    return await db.select().from(menuItems).where(eq(menuItems.category, category));
  }
  async createMenuItem(insertItem) {
    const [item] = await db.insert(menuItems).values({
      ...insertItem,
      description: insertItem.description || null,
      available: insertItem.available || 1
    }).returning();
    return item;
  }
};
var storage = new DatabaseStorage();

// server/routes.ts
async function registerRoutes(app2) {
  app2.get("/api/menu", async (req, res) => {
    try {
      const items = await storage.getMenuItems();
      res.json(items);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch menu items" });
    }
  });
  app2.get("/api/menu/:category", async (req, res) => {
    try {
      const { category } = req.params;
      const items = await storage.getMenuItemsByCategory(category);
      res.json(items);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch menu items by category" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  try {
    const existingItems = await db.select().from(menuItems).limit(1);
    if (existingItems.length === 0) {
      console.log("Initializing database with menu items...");
      const menuData = [
        // Coffee Section
        { name: "Cappuccino", description: "Rich espresso with steamed milk foam", price: "130.00", category: "coffee", icon: "coffee", available: 1 },
        { name: "Americano", description: "Espresso with hot water, smooth and strong", price: "120.00", category: "coffee", icon: "coffee", available: 1 },
        { name: "Espresso", description: "Pure, concentrated coffee shot", price: "100.00", category: "coffee", icon: "coffee", available: 1 },
        { name: "Latte", description: "Espresso with steamed milk and light foam", price: "100.00", category: "coffee", icon: "coffee", available: 1 },
        { name: "Cold Coffee", description: "Refreshing iced coffee blend", price: "100.00", category: "coffee", icon: "snowflake", available: 1 },
        { name: "Caffe Mocha", description: "Espresso with chocolate and steamed milk", price: "100.00", category: "coffee", icon: "coffee", available: 1 },
        { name: "Frappe Coffee", description: "Iced blended coffee with foam", price: "100.00", category: "coffee", icon: "snowflake", available: 1 },
        // Tea Section
        { name: "Lemon Tea", description: "Refreshing tea with fresh lemon", price: "20.00", category: "tea", icon: "leaf", available: 1 },
        { name: "Mint Tea", description: "Soothing tea with fresh mint leaves", price: "20.00", category: "tea", icon: "leaf", available: 1 },
        { name: "Ginger Tea", description: "Warming tea with fresh ginger", price: "20.00", category: "tea", icon: "leaf", available: 1 },
        { name: "Ginger Honey Tea", description: "Ginger tea sweetened with honey", price: "25.00", category: "tea", icon: "leaf", available: 1 },
        { name: "Cinnamon Tea", description: "Aromatic tea with cinnamon spice", price: "20.00", category: "tea", icon: "leaf", available: 1 },
        { name: "Cardamom Tea", description: "Fragrant tea with cardamom pods", price: "20.00", category: "tea", icon: "leaf", available: 1 },
        { name: "Saffron Tea", description: "Premium tea infused with saffron", price: "79.00", category: "tea", icon: "leaf", available: 1 },
        { name: "Green Tea", description: "Antioxidant-rich green tea", price: "30.00", category: "tea", icon: "leaf", available: 1 },
        // Fresh Juices Section
        { name: "Mango Juice", description: "Fresh tropical mango juice", price: "99.00", category: "juices", icon: "glass-whiskey", available: 1 },
        { name: "Pineapple Juice", description: "Sweet and tangy pineapple juice", price: "99.00", category: "juices", icon: "glass-whiskey", available: 1 },
        { name: "Chikku Juice", description: "Sweet sapodilla fruit juice", price: "99.00", category: "juices", icon: "glass-whiskey", available: 1 },
        { name: "Avocado Juice", description: "Creamy and nutritious avocado juice", price: "99.00", category: "juices", icon: "glass-whiskey", available: 1 },
        { name: "Apple Juice", description: "Crisp and refreshing apple juice", price: "99.00", category: "juices", icon: "glass-whiskey", available: 1 },
        { name: "Pomegranate Juice", description: "Antioxidant-rich pomegranate juice", price: "99.00", category: "juices", icon: "glass-whiskey", available: 1 },
        { name: "Watermelon Juice", description: "Hydrating watermelon juice", price: "99.00", category: "juices", icon: "glass-whiskey", available: 1 },
        { name: "Dates Juice", description: "Natural sweetness from dates", price: "99.00", category: "juices", icon: "glass-whiskey", available: 1 },
        { name: "Dates & Banana Juice", description: "Nutritious blend of dates and banana", price: "110.00", category: "juices", icon: "glass-whiskey", available: 1 },
        { name: "Papaya Honey Juice", description: "Sweet papaya with honey", price: "99.00", category: "juices", icon: "glass-whiskey", available: 1 },
        { name: "Orange, Carrot & Mango", description: "Vitamin-packed fruit blend", price: "99.00", category: "juices", icon: "glass-whiskey", available: 1 },
        { name: "Pistachio Juice", description: "Rich and nutty pistachio drink", price: "99.00", category: "juices", icon: "glass-whiskey", available: 1 },
        { name: "Blue Lime", description: "Refreshing blue lime drink", price: "20.00", category: "juices", icon: "glass-whiskey", available: 1 },
        { name: "Grape Juice", description: "Sweet and tangy grape juice", price: "20.00", category: "juices", icon: "glass-whiskey", available: 1 },
        { name: "Blueberry Juice", description: "Antioxidant-rich blueberry juice", price: "20.00", category: "juices", icon: "glass-whiskey", available: 1 },
        { name: "Strawberry Juice", description: "Sweet and fresh strawberry juice", price: "25.00", category: "juices", icon: "glass-whiskey", available: 1 },
        { name: "Melon Juice", description: "Refreshing melon juice", price: "20.00", category: "juices", icon: "glass-whiskey", available: 1 },
        { name: "Orange Juice", description: "Fresh citrus orange juice", price: "20.00", category: "juices", icon: "glass-whiskey", available: 1 },
        { name: "Guava Juice", description: "Tropical guava fruit juice", price: "79.00", category: "juices", icon: "glass-whiskey", available: 1 },
        // Shakes Section
        { name: "Mixed Dry Fruits Shake", description: "Nutritious blend of dry fruits", price: "89.00", category: "shakes", icon: "wine-glass", available: 1 },
        { name: "Dates Shake", description: "Natural sweetness in a creamy shake", price: "79.00", category: "shakes", icon: "wine-glass", available: 1 },
        { name: "Spanish Delight Shake", description: "Exotic Spanish-inspired shake", price: "99.00", category: "shakes", icon: "wine-glass", available: 1 },
        { name: "Oreo Shake", description: "Cookies and cream delight", price: "79.00", category: "shakes", icon: "wine-glass", available: 1 },
        { name: "Lotus Biscoff Shake", description: "Caramelized biscuit shake", price: "99.00", category: "shakes", icon: "wine-glass", available: 1 },
        { name: "Avocado Shake", description: "Creamy and healthy avocado shake", price: "99.00", category: "shakes", icon: "wine-glass", available: 1 },
        { name: "Strawberry Shake", description: "Fresh strawberry milkshake", price: "99.00", category: "shakes", icon: "wine-glass", available: 1 },
        { name: "All Berry Shake", description: "Mixed berries milkshake", price: "99.00", category: "shakes", icon: "wine-glass", available: 1 },
        { name: "Mango Shake", description: "Rich and creamy mango shake", price: "99.00", category: "shakes", icon: "wine-glass", available: 1 },
        { name: "T Castle Shake", description: "Our signature house special shake", price: "79.00", category: "shakes", icon: "wine-glass", available: 1 },
        // Cocktails Section
        { name: "Kannur Cocktail", description: "Refreshing fruit cocktail blend", price: "70.00", category: "cocktails", icon: "cocktail", available: 1 },
        { name: "Blue Curacao", description: "Vibrant blue cocktail", price: "70.00", category: "cocktails", icon: "cocktail", available: 1 },
        { name: "Blueberry Cocktail", description: "Fresh blueberry mocktail", price: "70.00", category: "cocktails", icon: "cocktail", available: 1 },
        { name: "Green Apple Cocktail", description: "Crisp green apple mocktail", price: "70.00", category: "cocktails", icon: "cocktail", available: 1 },
        { name: "Raspberry Cocktail", description: "Tangy raspberry mocktail", price: "70.00", category: "cocktails", icon: "cocktail", available: 1 },
        { name: "Strawberry Cocktail", description: "Sweet strawberry mocktail", price: "70.00", category: "cocktails", icon: "cocktail", available: 1 },
        // Desserts Section
        { name: "Normal Falooda", description: "Classic falooda dessert", price: "79.00", category: "desserts", icon: "ice-cream", available: 1 },
        { name: "Royal Falooda", description: "Premium falooda with ice cream", price: "99.00", category: "desserts", icon: "ice-cream", available: 1 },
        { name: "Fruit Salad", description: "Fresh seasonal fruit salad", price: "70.00", category: "desserts", icon: "apple-alt", available: 1 }
      ];
      await db.insert(menuItems).values(menuData);
      console.log("Database initialized successfully with", menuData.length, "menu items");
    } else {
      console.log("Database already has menu items, skipping initialization");
    }
  } catch (error) {
    console.error("Error initializing database:", error);
  }
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
