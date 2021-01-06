import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
  DarkMatterThemeProvider,
  darkTheme,
} from "@pluralsight/dark-matter-design-system";
import "./App.css";

function App() {
  return (
    <DarkMatterThemeProvider theme={darkTheme}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox />
            </TableCell>
            <TableCell>Channel Group</TableCell>
            <TableCell>Created</TableCell>
            <TableCell>Last Updated</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </DarkMatterThemeProvider>
  );
}

export default App;
