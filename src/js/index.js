const HOST = 'scragger.in'
let time = `${new Date().toLocaleTimeString()}`
const domContainer = document.querySelector('#root');
function Header(props){
    return (
        <header>
            <Linkbtn image={true} src='./src/images/logo-white.jpg'/>
            <Linkbtn name='about' href='#'/>
            <Linkbtn name='contact' href='#'/>
            <Linkbtn name='whatsapp' href='#'/>
        </header>
    )
}
function Linkbtn(props){
    if(props.image == true) {
        return (
            <div class='link'>
                <img src={props.src} draggable='false'/>
            </div>
        )
    } else return (
        <div class='link'>
            <a href={props.href}>{props.name}</a>
        </div>
    )
}
ReactDOM.render(<Header/>, domContainer);