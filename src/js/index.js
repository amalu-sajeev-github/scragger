const HOST = 'scragger.in'
let time = `${new Date().toLocaleTimeString()}`
const domContainer = document.querySelector('#root');
function Header(props){
    return (
        <header>
            <img src="./src/images/logo-white.jpg" draggable="false"/>
            <Linkbtn name='about' href='#'/>
            <Linkbtn name='contact' href='#'/>
            <Linkbtn name='whatsapp' href='#'/>
        </header>
    )
}
function Linkbtn(props){
return (
        <div class='link'>
            <a href={props.href}>{props.name}</a>
        </div>
    )
}
ReactDOM.render(<Header/>, domContainer);