const Comp5 = ({numb, str, bool, obj, func, arr}) =>{
    return <h1>
        {numb} {str} {bool? 'взлетает' : 'не взлетает'} {obj.name} {func()} {arr}
    </h1>
}

export default Comp5