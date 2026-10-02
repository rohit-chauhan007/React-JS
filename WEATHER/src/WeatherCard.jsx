import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
export default function WeatherCard(){
    return (
        <div className='card'>
          <Card
  sx={{
        width: {
      xs: 60,
      sm: 120,
      md: 150,
    },
    height: {
      xs: 90,
      sm: 150,
      md: 180,
    },
 
    background: "rgba(252, 239, 239, 0.02)",
    backdropFilter: "blur(15px)",
    border: "1px solid rgba(255,255,255,0.3)",
    borderRadius: 3,
  }}
>
  <CardContent
    sx={{
      height: "100%",
       boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      gap: 1,
      padding: 0,
      color:"white"
    }}
  >
    <Typography sx={{ fontSize:{
       xs:12,
       sm:18
    } }}>
      Feels like
    </Typography>

    <Typography sx={{ fontSize:{
        xs:15,
        sm:30
    } }}>
      24°C
    </Typography>
  </CardContent>
</Card>

        </div>
    )
}