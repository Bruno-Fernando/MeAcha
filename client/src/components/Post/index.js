import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import { IoIosChatbubbles } from "react-icons/io";

export default function index() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "50%" }}>
          <Carousel width={"100%"}>
            <img src="https://pm1.narvii.com/6319/fb3d27f9b46ab2863b7a75d6d38605903bad056c_hq.jpg" />

            <img src="https://www.animesxis.com.br/wp-content/uploads/2014/09/Neko-Hanekawa.jpg" />
          </Carousel>
        </div>
        <div style={{ width: "50%" }}>
          <Typography>Categoria</Typography>
          <Typography>Título</Typography>
          <Typography>Descrição</Typography>
          <Typography>Usuário</Typography>
        </div>
      </div>
      <Fab color="primary" aria-label="chat">
        <IoIosChatbubbles />
      </Fab>
    </>
  );
}
