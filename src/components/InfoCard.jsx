

export default function InfoCard({title, body}){
    const styleSheet ={
        container: {
            textAlign:"center",
        }, 
        title: {
            fontFamily: 'serif', 
            fontSize: "25px", 
        }, 

        body: {
            fontFamily: 'Poppins', 
            fontSize: "16px",     
            whiteSpace: "normal", 
            wordWrap: "break-word",
            maxWidth: "20ch",      
            overflowWrap: 'break-word',
        }
    }

    return (
        <div style={styleSheet.container}>
            <h2 style={styleSheet.title}>{title}</h2>
            <p dangerouslySetInnerHTML={{ __html: body }} />
        </div>
    );
}