import { useParams } from "react-router";

export default function ProjectDetails() {
    const { slug } = useParams();

    return (
        <div className="p-10">
            Project: {slug}
        </div>
    );
}