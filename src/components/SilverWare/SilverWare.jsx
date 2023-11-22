function SilverWare({name, count}){
    console.log(name, count);
    return (
        <div>
            {name}: {count * 2}
        </div>

    )

}

export default SilverWare;