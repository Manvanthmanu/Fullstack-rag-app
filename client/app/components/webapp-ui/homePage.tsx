'use client';
import * as React from 'react';
import { Upload } from 'lucide-react';
import { Button, Box } from '@mui/joy';


const HomePage: React.FC = () => {
    const handleFileUploadButtonClick = () => {
        const el = document.createElement("input");
        el.setAttribute("type", "file");
        el.setAttribute("accept", ".pdf,.doc,.docx,.txt");
        el.addEventListener("change", async (event) => {
            if (el.files && el.files.length > 0) {
                const file = el.files.item(0);
                if(file){
                    const formData = new FormData()
                    formData.append('pdf',file)

                    await fetch('http://localhost:5000/upload/pdf' , {
                        method:'POST',
                        body:formData
                    })
                    console.log('file uploaded')
                }
            }
        });
        el.click();
    };

    return (
        <>
            <Box
                sx={{
                    height: "100%", // full height of sidebar
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center", // centers horizontally
                    alignItems: "center",     // centers vertically
                }}
            >
                <Button
                    sx={{
                        height:"60px",
                        width:"220px",
                        color: "#50A8FA",
                        borderColor: "#50A8FA",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 1,
                        "&:hover": {
                            backgroundColor: "rgba(80, 168, 250, 0.1)",
                            borderColor: "#50A8FA",
                            color: "#50A8FA",
                        },
                    }}
                    onClick={handleFileUploadButtonClick}
                    size="lg"
                    variant="outlined"
                >
                    <Upload />
                    <span>Upload File</span>
                </Button>
                <div style={{margin:'8px'}}> 
                    <span style={{ fontSize: '14px', marginRight: '5px' }}>.pdf</span>
                    <span style={{ fontSize: '14px', marginLeft: '5px' }}>.docs</span>

                </div>
                
                <div style={{borderTop: '2px solid black', width: '100%', marginTop: '20px', paddingTop: '10px'}}>
                    
                </div>
            </Box>
        </>
    )
}

export default HomePage;