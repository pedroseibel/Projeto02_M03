const mongoose = require("mongoose"); //Importa o Mongoose

async function Conn() {
  await mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_BASE}`,
      {
        // Conexão local ou Atlas
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      // Conexão efetuada
      console.log("Conexão efetuada com sucesso!");
    })
    .catch((err) => {
      // Em caso de erro
      console.error(err);
    });
}

module.exports = Conn; //Exporta a conexão
