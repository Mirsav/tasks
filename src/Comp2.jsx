const Comp2 = ({numb, str, bool, obj, func, arr}) =>{
    console.log(numb, str, bool, obj, func,  arr)
    return <h1>
        {numb} {str} {bool? 'взлетает' : 'не взлетает'} {obj.name} {func()} {arr}
    </h1>
}


export default Comp2