// Selection
const FORM_TABLE_BODY = document.querySelector("#Form_table_body");
const FORM_CLICK_LOGO = document.querySelector(".form_create_table")
const LABEL_CLICK_LOGO = document.querySelector(".form-label")
const INPUT_CLICK_LOGO = document.querySelector(".form-control")
const BUTTON_CLICK_LOGO = document.querySelector(".form_logo_btn")


///////////////////////////////////////////
const AxiosInstance = axios.create({
  baseURL: "http://localhost:3001/",
  timeout: 4000,
});
///////////////////////////////////////////
const fetchApiData = async (url, cb) => {
  await AxiosInstance.get(url).then((res) => {
    cb(res.data);
  });
};
///////////////////////////////////////////
const RenderFormData = async (data) => {
  data &&
    data.forEach((blog, index) => {
      const FormHtml =
           ` <tr>
                     <th scope="col">${index + 1}</th>
                     <th scope="col"> <img src="${blog?.image ?? ""}" alt="Image ${index}" style="max-width: 100px; height: auto;" /></th>
                      <th scope="col"><button type="button" class="btn btn-danger">Danger</button></th>
                 </tr>`;
      FORM_TABLE_BODY.innerHTML += FormHtml;
    });
};
///////////////////////////////////////////
fetchApiData("/data", (data) => {
  RenderFormData(data);
});

const LoadApiData = async (url, cb) => {
  await AxiosInstance.post(url).then((res) => {
    fetchApiData("/data", (cb));
  });
};
///////////////////////////////////////////
FORM_CLICK_LOGO &&
  FORM_CLICK_LOGO.addEventListener("submit", (e) => {
    e.preventDefault();
    const fileReader = new FileReader();

    fileReader.onload = () => {
      let payload = {
        id: crypto.randomUUID(),
        image: fileReader.result,
      };
      AxiosInstance.post("/data", payload).then((res) => {
        fetchApiData("/data", RenderFormData);
      });
      LoadApiData("/data", payload)

    };
    fileReader.readAsDataURL(INPUT_CLICK_LOGO.files[0]);

  });