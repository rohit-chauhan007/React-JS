
export default function Todo(){
    return(
        <div className="main">
          <div className="todo-container">
            <h1>TO DO</h1>
            <div className="input-container">
                <input type="text" placeholder="Enter your Task ..."></input>
                <button>Add</button>
            </div>
            <div className="todo-lists">
                <li>Eet</li>
            </div>

          </div>
        </div>
    )
}