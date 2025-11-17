export default function DemoReel({ link, title }) {
  return (
    <div style={stylesheet.container}>
      <div style = {stylesheet.videoWrapper}>
        <iframe
          title="vimeo-player"
          src={link}
          style={stylesheet.iframe}
          referrerpolicy="strict-origin-when-cross-origin"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          allowfullscreen
        ></iframe>
      </div>
       <h2 style={stylesheet.title}>{title}</h2>
    </div>
  );
}

const stylesheet = {

     container:{
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        width: "100vw", 
        boxSizing: "border-box",
        paddingLeft: "1rem", 
        paddingRight: "1rem",
        overflowX: "hidden",
     },  
     videoWrapper: {
      width: "100%",
      maxWidth: "1200px",  
      aspectRatio: "16 / 9",   
      overflow: "hidden",
    },
    iframe: {
      width: "100%",
      height: "100%",
      border: "none",
    },
    title:{
        fontWeight: 400, 
        textAlign: "center",
    }

}