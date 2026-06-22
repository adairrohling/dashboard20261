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


  



export async function TableStudent() {
  const request = await fetch("https://crudcrud.com/api/bb2777ad871c4f28a39d6087d6198bac/student")

  const students = await request.json();
  return (
    <Table>
      <TableCaption>Uma Lista de Estudantes</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">R.A.</TableHead>
          <TableHead>Nome do Estudante</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Ação</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {students.map((student: any) => (
          <TableRow key={student._id}>
            <TableCell className="font-medium">{student._id}</TableCell>
            <TableCell>{student.name}</TableCell>
            <TableCell>{student.email}</TableCell>
            <TableCell><a
              href={`/student/delete?id=${student._id}`}>
              Deletar
            </a></TableCell>

          </TableRow>
        ))}
      </TableBody>
      <TableFooter>

      </TableFooter>
    </Table>
  )
}
