import { v2 as cloudinary } from 'cloudinary'
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
    cloud_name:'cursos-jmfr',
    api_key: '186644566272635',
    api_secret: 'dixjAR7JHlygvRw_MX6ujuLVdng',
    secure: true,
});


describe('Pruebas en fileUpload', () => {
//   test('Debe de subir el archivo correctamente a cloudbinary', async() => {
//     const imageUrl = 'https://t3.ftcdn.net/jpg/03/15/34/90/360_F_315349043_6ohfFyx37AFusCKZtGQtJR0jqUxhb25Y.jpg';
//     const resp = await fetch(imageUrl);
//     const blob = await resp.blob();
//     const file = new File([blob],'foto.jpg');

//     const url = await fileUpload(file);
//     expect(typeof url).toBe('string');

//     const segments = url.split('/');

//     const imageId = segments[segments.length - 1].replace('.jpg','');
        // TODO: no elimina
//     const resp2 = await cloudinary.api.delete_resources([imageId]);
//     console.log({resp2});
//   });

  test('Debe de retornar null', async() => {
    const file = new File([],'foto.jpg');

    const url = await fileUpload(file);
    expect(url).toBe(null);


  });
  
  
});
