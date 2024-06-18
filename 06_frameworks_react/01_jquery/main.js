$(function () {
  $('#add').click(() => {
    let firstNum = +$('#firstInput').val();
    let secondNum = +$('#secondInput').val();

    $('#answer').text(firstNum + secondNum);
  })
});
