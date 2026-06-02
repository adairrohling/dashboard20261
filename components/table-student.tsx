import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


const request = await fetch("https://crudcrud.com/api/ea76afed59ec4a04b786d38ad91cac04/students")

const students = await request.json();



export function TableStudent() {
  return (
    <Table>
      <TableCaption>Uma Lista de Estudantes</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">R.A.</TableHead>
          <TableHead>Nome do Estudante</TableHead>
          <TableHead>Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {students.map((student:any) => (
          <TableRow key={student._id}>
            <TableCell className="font-medium">{student._id}</TableCell>
            <TableCell>{student.name}</TableCell>
            <TableCell>{student.email}</TableCell>
           
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
       
      </TableFooter>
    </Table>
  )
}
