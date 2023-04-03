import { useEffect } from "react";

const Image = () => {
    
    useEffect(() => {
        return () => {
            console.log('Image1 se desmonta')
        }
    }, []);

    const urlImage = 'https://www.latercera.com/resizer/t41A6a_uLk_5UodtaHEO_31UtXk=/200x200/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/AEB4PGU2LNCUTE6MSTSSDS3EEA.jpg';
    return (
        <img src={urlImage} alt="Imagen no cargo" />
    )
}

export default Image;



























