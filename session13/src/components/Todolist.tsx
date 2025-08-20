import { Component } from 'react'
type Job = {
    id: number,
    name: string,
    assign: string,
    status: boolean,
    created_at: Date
}
type State = {
    jobs: Job[];
}

export default class Todolist extends Component<object, State> {
    constructor(props: object) {
        super(props)
        this.state = {
            jobs :[
                {
                    id: 1,
                    name: "Thiet ke giao dien header",
                    assign: "Vu Viet Tien",
                    status: true,
                    created_at: new Date(),

                },
                {
                    id: 2,
                    name: "Thiet ke web ban hang",
                    assign: "Tanjiro",
                    status: false,
                    created_at: new Date(),

                },

            ]
        }
    }

    formatDate(date: Date): string {
        const d = date.getDate().toString().padStart(2, "0");
        const m = (date.getMonth() + 1).toString().padStart(2, "0");
        const y = date.getFullYear();
        const hh = date.getHours().toString().padStart(2, "0");
        const mm = date.getMinutes().toString().padStart(2, "0");
        const ss = date.getSeconds().toString().padStart(2, "0");
        return `${d}/${m}/${y} ${hh}:${mm}:${ss}`;
    }

    render() {
        return (
            <div>
                <table  border={1} cellPadding={8} style={{ borderCollapse: "collapse", width: "100%" }}>
                    <thead> 
                        <tr>
                            <th>STT</th>
                            <th>Ten cong viec</th>
                            <th>Nguoi thuc hien</th>
                            <th>Trang thai</th>
                            <th>Thoi gian tao</th>
                            <th>Chuc nang</th>
                        </tr>
                    </thead>
                    <tbody> 
                        {this.state.jobs.map((item)=>(  
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.assign}</td>
                                <td>{item.status?(<span style={{color: "green", }}>Hoan thanh</span>):(<span style={{color: "red"}}>Chua hoan thanh</span>)}</td>
                                <td>{this.formatDate(item.created_at)}</td>
                                <td>    
                                    <button style={{backgroundColor : "origin",color: "blue"}}>Sua</button>
                                    <button style={{backgroundColor : "red",color: "pink"}}>Xoa</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
