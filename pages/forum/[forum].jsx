import { useRouter } from "next/router";
import Sboard from "../components/home/board.module.css";

export default function Forum() {
    const router = useRouter();

    return (
        <section className={Sboard["section"]}>
            <div className={Sboard["section-title"]}>
                <span>Topics</span>
            </div>
            <tbody>
                <tr>
                    <th>asd</th>
                </tr>
                
            </tbody>
        </section>
    );
}
