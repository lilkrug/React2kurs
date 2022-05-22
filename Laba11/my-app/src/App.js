import './App.css';
import Hierarchy from "./Hierarchy.js";

function App() {
    const hierarchy = [{
        id: 1,
        name: "Игры",
        icon: "/icons/folder.png",
        childs: [{
            id: 2,
            name: "Warcraft 3",
            icon: "/icons/folder.png",
            onClick: function (id) {
                console.log(id);
            },
            childs: [{
                id: "1",
                name: "расписание.png",
                icon: "/icons/image.png",
                onClick: function (id) {
                    console.log(id);
                }
            }]
        }]
    },

    {
        id: 3,
        name: "Мои файлы",
        icon: "/icons/folder.png",
        childs: [{
            id: 3   ,
            name: "Загрузки",
            icon: "/icons/folder.png",
            childs: [{
                id: 5,
                name: "Warchammer",
                icon: "/icons/video.png",
                onClick: function (id) {
                    console.log(id);
                }
            },
            {
                id: 6,
                name: "no-homo.mp3",
                icon: "/icons/music (1).png",
                onClick: function (id) {
                    console.log(id);
                }
            }
            ]
        }]
    },

    {
        id: 7,
        name: "Новая папка",
        icon: "/icons/folder.png",
        childs: [
            {
                id: 8,
                name: "Новая папка (1)",
                icon: "/icons/folder.png"
            }
        ]
    },


    ];

    return (
        <div className="App">
            <Hierarchy tree={hierarchy} />
        </div>
    );
}

export default App;
