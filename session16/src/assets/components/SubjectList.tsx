import { Component } from 'react'

export default class SubjectList extends Component {
    subjects: string[] = ["toan", "ly", "hoa", "sinh", "anh"]
    render() {
        return (
            <div>
                <h2>Danh sach mon hoc</h2>
                <ul>
                    {this.subjects.map((subject, index) => (
                        <li key={index} style={{ listStyle: "none", padding: 0 }}>
                            {subject}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
