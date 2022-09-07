import { ThemeProvider, createTheme } from "@mui/material/styles"
import { Button } from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: "IRANSansDN",
    },
    direction: "rtl"
})

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Button variant="contained" color="success">اضافه کردن</Button>
            </div>
        </ThemeProvider>
    )
}

export default App;