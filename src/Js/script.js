const AxiosInstance = axios.create({
    baseURL: "http://localhost:3001/",
    timeout: 4000,

});


const fetchApiData=async (url,cb)=>{
    await AxiosInstance.get(url).then((res) =>
    {
        cb(res.data)
    }
)
}

const LOGO_DATA = document.querySelector("#logo_api_panel");


const RenderLogoData = async (data) => {
    data && data.forEach((blog, index) => {
        const LogoHtml = `  
              <div id="logo_main_card__img">
             <img src="${blog?.image?? ""}"
               alt="" />
             </div>`
            LOGO_DATA.innerHTML += LogoHtml;

    });
}

fetchApiData("/data",(data)=>{
    RenderLogoData(data);
}
)

