function List(){
    const fruits=null
    const listItem=fruits.map((fruit)=><li key={fruit.name}>{fruit.name}</li>)
    return(
        <ul>{listItem}</ul>
    );

}
export default List