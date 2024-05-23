import StudentInfo from "./student-info";


export default function Page(){
    return(
        <main className="h-screen bg-teal-900 p-5">
            <h1 className="text-teal-100">Shopping List</h1>
            <StudentInfo/>
        </main>
    );
}