import {
  Container,
  TextField,
  Typography,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [emailContent, setEmailContent] = useState("");
  const [tone, setTone] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatedReply, setGeneratedReply] = useState("");

  const handleSubmit = async () => {
    // Handle form submission here
    setLoading(true);
    try{
      const
      response = await axios.post("http://localhost:8080/api/email/generate", {
        emailContent,
        tone
      });
      setGeneratedReply(typeof response.data === 'string' ? response.data : JSON.stringify(response.data)
      );
    }catch(error){
      
    }finally{
      setLoading(false);
    }
  };
  

  return (
    <>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Email Reply Generator
        </Typography>

        <Box sx={{ my: 3 }}>
          <TextField
            fullWidth
            multiline
            rows={6}
            variant="outlined"
            label="Original Email Content"
            value={emailContent || ""}
            onChange={(e) => setEmailContent(e.target.value)}
            sx={{ mb: 2 }}
          />

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Tone (Optional)</InputLabel>
            <Select
              value={tone || ""}
              label="Tone (Optional)"
              onChange={(e) => setTone(e.target.value)}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="Professional">Professional</MenuItem>
              <MenuItem value="Casual">Casual</MenuItem>
              <MenuItem value="Formal">Formal</MenuItem>
              <MenuItem value="friendly">Friendly</MenuItem>
            </Select>
          </FormControl>

          <Button variant="contained"
            onClick={handleSubmit}
            disabled = {!emailContent || loading}>
            {loading ? <CircularProgress size={24} /> : "Generate Reply"}
          </Button>
        </Box>


        <Box sx={{ my: 3 }}>
          <TextField
            fullWidth
            multiline
            rows={6}
            variant="outlined"
            label="Original Email Content"
            value={generatedReply || ''}
            inputProps = {{ readOnly: true }}
            sx={{ mb: 2 }}
          />

          <Button variant="outlined" onClick={() => navigator.clipboard.writeText(generatedReply)}>
          Copy to Clipboard
          </Button>

        </Box>

      </Container>
    </>
  );
}

export default App;
