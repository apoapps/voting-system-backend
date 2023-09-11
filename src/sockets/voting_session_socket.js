// votingSessionSockets.js

let votingPoints = [
  {
    commision: "Calidad y servicios",
    required_votes: "Mayoría Simple",
    voting_form: "Economica",
    subject: "Calidad del servicio",
    description:
      "La presentación de mañana será un éxito, no hay duda de ello. El Cabildo de Mexicali se encuentra en un momento crucial, donde cada voto y cada decisión tienen un impacto significativo en el bienestar de la comunidad. Con la implementación de nuestro nuevo sistema de votación, estamos seguros de que el proceso será más transparente, eficiente y, sobre todo, representativo de la voluntad del pueblo. Este sistema no solo moderniza la forma en que se llevan a cabo las sesiones, sino que también fomenta una mayor participación y compromiso tanto de los miembros del Cabildo como de la ciudadanía. Estamos convencidos de que esta propuesta será bien recibida y marcará un antes y un después en la forma en que se toman las decisiones políticas en nuestra ciudad. Así que preparémonos para una jornada exitosa, donde la tecnología y la democracia se unen para hacer historia.",
    _id: "64ebdc17ec33cfa0399b9ae3",
    votesFor: [],
    votesAgainst: [],
    votesAbstain: [],
  },
  {
    commision: "Calidad",
    required_votes: "Mayoría Simple",
    voting_form: "Economica",
    subject: "Uso de pelucas en sesiones de cabildo",
    description:
      "Estoy de acuerdo con el uso de pelucas en las sesiones de Cabildo. Incorporar este elemento tradicional podría añadir un nivel de formalidad y respeto al proceso legislativo. Además, el uso de pelucas podría servir como un recordatorio constante de la seriedad de las decisiones que se toman, reforzando la importancia del rol de cada miembro del Cabildo. En resumen, la propuesta no solo tiene méritos estéticos sino también funcionales que podrían enriquecer nuestras reuniones.",
    _id: "64ebdc17ec33cfa0399b9ae3",
    votesFor: [],
    votesAgainst: [],
    votesAbstain: [],
  },
]; // Initialize with your data
let currentIndex = 0;

export default (io) => {
  io.on("connection", (socket) => {
    console.log("Nuevo cliente conectado (Session Flutter)");

    socket.on("client:getsession", () => {
      socket.emit("server:updatesession", { votingPoints, currentIndex });
    });

    socket.on("client:nextpoint", () => {
      if (currentIndex < votingPoints.length - 1) {
        currentIndex++;
      }
      io.emit("server:updatesession", { votingPoints, currentIndex });
      io.emit("server:next", currentIndex);
      console.log("(nextPoint) Current index: " + currentIndex);
    });

    socket.on("client:previouspoint", () => {
      if (currentIndex > 0) {
        currentIndex--;
      }
      io.emit("server:updatesession", { votingPoints, currentIndex });
      io.emit("server:previous", currentIndex);
      console.log("(previousPoint) Current index: " + currentIndex);
    });

    socket.on("client:votefor", (data) => {
      const firstName = data.firstName;
      const point = votingPoints[currentIndex];

      removePreviousVote(firstName, point);
      point.votesFor.push(data);
      io.emit("server:updatesession", { votingPoints, currentIndex });
    });

    socket.on("client:voteagainst", (data) => {
      const firstName = data.firstName;
      const point = votingPoints[currentIndex];

      removePreviousVote(firstName, point);
      point.votesAgainst.push(data);
      io.emit("server:updatesession", { votingPoints, currentIndex });
    });

    socket.on("client:voteabstain", (data) => {
      const firstName = data.firstName;
      const point = votingPoints[currentIndex];

      removePreviousVote(firstName, point);
      point.votesAbstain.push(data);
      io.emit("server:updatesession", { votingPoints, currentIndex });
    });
  });
};

const removePreviousVote = (firstName, point) => {
  point.votesFor = point.votesFor.filter(
    (vote) => vote.firstName !== firstName
  );
  point.votesAgainst = point.votesAgainst.filter(
    (vote) => vote.firstName !== firstName
  );
  point.votesAbstain = point.votesAbstain.filter(
    (vote) => vote.firstName !== firstName
  );
};

// Función para verificar si un usuario específico ya ha votado en este punto
const hasVotedInThisPoint = (firstName, point) => {
  return (
    point.votesFor.some((vote) => vote.firstName === firstName) ||
    point.votesAgainst.some((vote) => vote.firstName === firstName) ||
    point.votesAbstain.some((vote) => vote.firstName === firstName)
  );
};

// Función para eliminar un voto existente de un usuario
const removeExistingVote = (password, point) => {
  point.votesFor = point.votesFor.filter((vote) => vote.password !== password);
  point.votesAgainst = point.votesAgainst.filter(
    (vote) => vote.password !== password
  );
  point.votesAbstain = point.votesAbstain.filter(
    (vote) => vote.password !== password
  );
};
