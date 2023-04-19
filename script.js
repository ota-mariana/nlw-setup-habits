const form = document.querySelector("#form-habits");
const nlwSetup = new NLWSetup(form);

const data = {
  exercise: ["01-01", "01-02", "01-03", "01-04", "01-07", "01-08", "01-09"],
}

nlwSetup.setData(data);
nlwSetup.load();