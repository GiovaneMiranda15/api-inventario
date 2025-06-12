import express from "express";
import cors from "cors";

const app = express();

app.use(cors(
  {
    origin: "*", // Permite requisições de qualquer origem
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Métodos permitidos
    allowedHeaders: "Content-Type, Authorization" // Cabeçalhos permitidos
  }
));
app.use(express.json());

import unidadeRoutes from "./routes/unidadeRoutes";
app.use("/api/unidade", unidadeRoutes);

import setorRoutes from './routes/setorRoutes'
app.use('/api/setor', setorRoutes)

// const usuarioRoutes = require("./routes/usuarioRoutes");
// app.use("/usuario", usuarioRoutes);

// const categoriaRoutes = require("./routes/categoriaRoutes");
// app.use("/categoria", categoriaRoutes);

// const produtoRoutes = require("./routes/produtoRoutes");
// app.use("/produto", produtoRoutes);

// const fornecedorRoutes = require("./routes/fornecedorRoutes");
// app.use("/fornecedor", fornecedorRoutes);

// const inventarioRoutes = require("./routes/inventarioRoutes");
// app.use("/inventario", inventarioRoutes);

export default app;