interface MotivationalMessageProps {
 message: string;
 author: string;
}


export function Motivational(props: MotivationalMessageProps){
    return(
        <main>
            
        <h2 style={{color: "blue"}}>{props.message}</h2>
        <h3>{props.author}</h3>
            
        </main>

    )
}