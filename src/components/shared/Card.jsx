function Card(props){
    var x = 10;
    var name = classroom.name;
    var menu = ["Vịt quay Bắc Kinh","Lẩu Tứ Xuyên","Sườn xào chua ngọt"];
    var room = {
        room_name: classroom.room_name,
        time: classroom.time
    }
    x++;
    return (
        <div className="item">
            <h2>Class Name: {name}, room: {room.room_name}</h2>
            <p>Demo first component: {x+1}</p>
            <h2>Menu: Ngayf: {room.time}</h2>
            <ul>
                {
                    // chỗ này viết chèn code JS vào
                    menu.map(e=>{
                        return <li>{e}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Card;