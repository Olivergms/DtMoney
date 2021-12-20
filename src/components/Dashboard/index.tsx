import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";

import { Container } from "./syles";

export function DashBoard(){
    return(
        <Container>
            <Summary/>
            <TransactionsTable />
        </Container>
    );
}