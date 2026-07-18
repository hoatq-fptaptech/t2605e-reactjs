function Card(){
    var x = 10;
    var name = "T2605E";
    var menu = ["Vịt quay Bắc Kinh","Lẩu Tứ Xuyên","Sườn xào chua ngọt"];
    var room = {
        room_name: "Kẻ chợ",
        time: "17:30-21:30"
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