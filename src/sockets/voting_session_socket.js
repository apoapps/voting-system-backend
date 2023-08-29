// votingSessionSockets.js

let votingPoints = [
  {
    commision: "Obras y Servicios Publicos",
    required_votes: "Mayoría Simple",
    voting_form: "Economica",
    subject: "Dummy Point 1",
    _id: "64ebdc17ec33cfa0399b9ae3",
    votesFor: [
      {
        _id: "64eb109ca778f0e4fbdb0d78",
        position: "Administrador",
        municipalityNumber: "0",
        lastName: " ",
        firstName: " ",
        gender: "Masculino",
        party: "sin-definir",
        startDate: "2023-07-18T00:00:00Z",
        endDate: "2040-01-01T00:00:00Z",
        memberStatus: "Activo",
        memberPhoto: "admin_photo",
        password: "1209",
        createdAt: "2023-08-27T09:00:12.162Z",
        updatedAt: "2023-08-27T09:00:12.162Z",
        __v: 0,
      },
      {
        _id: "64ebd11d86bda4e9d6abc7fa",
        position: "Regidor",
        municipalityNumber: "24",
        lastName: "Sanchez",
        firstName: "Ximena",
        gender: "Femenino",
        party: "sin-definir",
        startDate: "2021-8-27",
        endDate: "2025-8-27",
        memberStatus: "Activo",
        memberPhoto: "",
        password: "3434",
        createdAt: "2023-08-27T22:41:33.865Z",
        updatedAt: "2023-08-27T22:41:33.865Z",
        __v: 0,
      },
    ],
    votesAgainst: [
      {
        _id: "64eb109ca778f0e4fbdb0d78",
        position: "Administrador",
        municipalityNumber: "0",
        lastName: " ",
        firstName: " ",
        gender: "Masculino",
        party: "sin-definir",
        startDate: "2023-07-18T00:00:00Z",
        endDate: "2040-01-01T00:00:00Z",
        memberStatus: "Activo",
        memberPhoto: "admin_photo",
        password: "1209",
        createdAt: "2023-08-27T09:00:12.162Z",
        updatedAt: "2023-08-27T09:00:12.162Z",
        __v: 0,
      },
      {
        _id: "64ebd11d86bda4e9d6abc7fa",
        position: "Regidor",
        municipalityNumber: "24",
        lastName: "Sanchez",
        firstName: "Ximena",
        gender: "Femenino",
        party: "sin-definir",
        startDate: "2021-8-27",
        endDate: "2025-8-27",
        memberStatus: "Activo",
        memberPhoto: "",
        password: "3434",
        createdAt: "2023-08-27T22:41:33.865Z",
        updatedAt: "2023-08-27T22:41:33.865Z",
        __v: 0,
      },
    ],
    votesAbstain: [
      {
        _id: "64eb109ca778f0e4fbdb0d78",
        position: "Administrador",
        municipalityNumber: "0",
        lastName: " ",
        firstName: " ",
        gender: "Masculino",
        party: "sin-definir",
        startDate: "2023-07-18T00:00:00Z",
        endDate: "2040-01-01T00:00:00Z",
        memberStatus: "Activo",
        memberPhoto: "admin_photo",
        password: "1209",
        createdAt: "2023-08-27T09:00:12.162Z",
        updatedAt: "2023-08-27T09:00:12.162Z",
        __v: 0,
      },
      {
        _id: "64ebd11d86bda4e9d6abc7fa",
        position: "Regidor",
        municipalityNumber: "24",
        lastName: "Sanchez",
        firstName: "Ximena",
        gender: "Femenino",
        party: "sin-definir",
        startDate: "2021-8-27",
        endDate: "2025-8-27",
        memberStatus: "Activo",
        memberPhoto: "",
        password: "3434",
        createdAt: "2023-08-27T22:41:33.865Z",
        updatedAt: "2023-08-27T22:41:33.865Z",
        __v: 0,
      },
    ],
  },
  {
    commision: "Obras y Servicios Publicos",
    required_votes: "Mayoría Absoluta",
    voting_form: "Nominal",
    subject: "Dummy Point 2",
    _id: "64ebdc17ec33cfa0399b9ae4",
    votesFor: [
      {
        _id: "64eb109ca778f0e4fbdb0d78",
        position: "Administrador",
        municipalityNumber: "0",
        lastName: " ",
        firstName: " ",
        gender: "Masculino",
        party: "sin-definir",
        startDate: "2023-07-18T00:00:00Z",
        endDate: "2040-01-01T00:00:00Z",
        memberStatus: "Activo",
        memberPhoto: "admin_photo",
        password: "1209",
        createdAt: "2023-08-27T09:00:12.162Z",
        updatedAt: "2023-08-27T09:00:12.162Z",
        __v: 0,
      },
      {
        _id: "64ebd11d86bda4e9d6abc7fa",
        position: "Regidor",
        municipalityNumber: "24",
        lastName: "Sanchez",
        firstName: "Ximena",
        gender: "Femenino",
        party: "sin-definir",
        startDate: "2021-8-27",
        endDate: "2025-8-27",
        memberStatus: "Activo",
        memberPhoto: "",
        password: "3434",
        createdAt: "2023-08-27T22:41:33.865Z",
        updatedAt: "2023-08-27T22:41:33.865Z",
        __v: 0,
      },
    ],
    votesAgainst: [
      {
        _id: "64eb109ca778f0e4fbdb0d78",
        position: "Administrador",
        municipalityNumber: "0",
        lastName: " ",
        firstName: " ",
        gender: "Masculino",
        party: "sin-definir",
        startDate: "2023-07-18T00:00:00Z",
        endDate: "2040-01-01T00:00:00Z",
        memberStatus: "Activo",
        memberPhoto: "admin_photo",
        password: "1209",
        createdAt: "2023-08-27T09:00:12.162Z",
        updatedAt: "2023-08-27T09:00:12.162Z",
        __v: 0,
      },
      {
        _id: "64ebd11d86bda4e9d6abc7fa",
        position: "Regidor",
        municipalityNumber: "24",
        lastName: "Sanchez",
        firstName: "Ximena",
        gender: "Femenino",
        party: "sin-definir",
        startDate: "2021-8-27",
        endDate: "2025-8-27",
        memberStatus: "Activo",
        memberPhoto: "",
        password: "3434",
        createdAt: "2023-08-27T22:41:33.865Z",
        updatedAt: "2023-08-27T22:41:33.865Z",
        __v: 0,
      },
    ],
    votesAbstain: [
      {
        _id: "64eb109ca778f0e4fbdb0d78",
        position: "Administrador",
        municipalityNumber: "0",
        lastName: " ",
        firstName: " ",
        gender: "Masculino",
        party: "sin-definir",
        startDate: "2023-07-18T00:00:00Z",
        endDate: "2040-01-01T00:00:00Z",
        memberStatus: "Activo",
        memberPhoto: "admin_photo",
        password: "1209",
        createdAt: "2023-08-27T09:00:12.162Z",
        updatedAt: "2023-08-27T09:00:12.162Z",
        __v: 0,
      },
      {
        _id: "64ebd11d86bda4e9d6abc7fa",
        position: "Regidor",
        municipalityNumber: "24",
        lastName: "Sanchez",
        firstName: "Ximena",
        gender: "Femenino",
        party: "sin-definir",
        startDate: "2021-8-27",
        endDate: "2025-8-27",
        memberStatus: "Activo",
        memberPhoto: "",
        password: "3434",
        createdAt: "2023-08-27T22:41:33.865Z",
        updatedAt: "2023-08-27T22:41:33.865Z",
        __v: 0,
      },
    ],
  },
]; // Initialize with your data
let currentIndex = 0;

export default (io) => {
  io.on("connection", (socket) => {
    console.log("Nuevo cliente conectado (Session Flutter)");

    socket.on("client:getsession", () => {
      socket.emit("server:update_session", { votingPoints, currentIndex });
    });

    socket.on("client:nextpoint", () => {
      if (currentIndex < votingPoints.length - 1) {
        currentIndex++;
      }
      io.emit("server:update_session", { votingPoints, currentIndex });
      io.emit("server:next", currentIndex);
      console.log("(nextPoint) Current index: " + currentIndex);
    });

    socket.on("client:previouspoint", () => {
      if (currentIndex > 0) {
        currentIndex--;
      }
      io.emit("server:update_session", { votingPoints, currentIndex });
      io.emit("server:previous", currentIndex);
      console.log("(previousPoint) Current index: " + currentIndex);
    });

    socket.on("client:vote", (data) => {
      const { voteType, user } = data;
      const point = votingPoints[currentIndex];
      if (voteType === "for") {
        point.votesFor.push(user);
      } else if (voteType === "against") {
        point.votesAgainst.push(user);
      } else if (voteType === "abstain") {
        point.votesAbstain.push(user);
      }
      io.emit("server:update_session", { votingPoints, currentIndex });
    });
  });
};
