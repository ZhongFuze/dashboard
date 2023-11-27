export default async function handler(req, res) {
    const name = req.query.name;
    const backendUrl = `http://localhost:11111/data_server/mydata/myaction?name=${name}`;
  
    try {
      const backendResponse = await fetch(backendUrl);
      if (!backendResponse.ok) {
        return res.status(backendResponse.status).json({ message: 'Backend server error' });
      }
      const data = await backendResponse.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
}