function customerRender(reactElement,container){
// const docElement=document.createElement(reactElement.type);
// docElement.innerHTML=reactElement.children;
// docElement.setAttribute('href',reactElement.props.href);

// docElement.setAttribute('target',reactElement.props.target);
// container.appendChild(docElement);
const domElement=document.createElement(reactElement.type);

 
domElement.innerHTML=reactElement.children;
for (const prop
     in reactElement.props) {
        if(prop==='children')continue;
        domElement.setAttribute(prop,reactElement.props[prop]);

   
}
container.appendChild(domElement);
}
const reactElement={
    type:'a',
    props:{
        href:"https://www.youtube.com/watch?v=kAOuj6o7Kxs&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&index=4",
        target:'_blank'
    },
    children:"click me to visit youtube"
}
const hero=document.getElementById('root');
customerRender(reactElement,hero);