export default function DemoReel({ link, title }) {
  return (
    <div style={stylesheet.container}>
      <iframe
        title="vimeo-player"
        src={link}
        width="640"
        height="360"
        frameborder="0"
        referrerpolicy="strict-origin-when-cross-origin"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        allowfullscreen
      ></iframe>
       <h2 style={stylesheet.title}>{title}</h2>
    </div>
  );
}

const stylesheet = {

     container:{
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        width: "100%",
     }, 
    title:{
        fontWeight: 400, 
        textAlign: "center",
    }

}