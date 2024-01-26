import puppeteer from 'puppeteer';

const Print = async(varUrl, varWidth, varHeight) => {

    const dataAtual = new Date();

    // Obter a data
    const ano = dataAtual.getFullYear();
    const mes = ('0' + (dataAtual.getMonth() + 1)).slice(-2);
    const dia = ('0' + dataAtual.getDate()).slice(-2);
    const hora = ('0' + dataAtual.getHours()).slice(-2);
    const minuto = ('0' + dataAtual.getMinutes()).slice(-2);
    const dataFormatada = `${ano}-${mes}-${dia}-${hora}-${minuto}`;

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try{
            await page.setViewport({
                width: varWidth,
                height: varHeight,
            });
            await page.goto(varUrl);
            await page.waitForTimeout(500)
            await page.screenshot({path: './CapturaDeTela-'+ dataFormatada +'.png'})
        }
        catch(err){
            console.log(err);
        }
    await browser.close();

}


Print("htftps://www.victorsales.com.br", 720, 1080)
