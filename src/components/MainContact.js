import React from "react";

const MainContact = () => {
  return (
    <div className="main-contact">
      <h1>Contact</h1>
      <div className="container">
        <form
          action="https://getform.io/f/31c9b7c2-d5ee-4ec8-8041-155a3e63be12"
          method="POST"
        >
          <div>
            <label for="name">お名前</label>
            <br></br>
            <input className="Name" name="name" type="text" required />
          </div>
          <div>
            <label for="email">メールアドレス</label>
            <br></br>
            <input className="Email" name="email" type="email" required />
          </div>
          <div>
            <label for="content">お問い合わせ内容</label>
            <br></br>
            <textarea
              className="Content"
              name="content"
              type="text"
              rows="10"
              required
            ></textarea>
          </div>
          <button className="submitbutton" type="submit">
            送信する
          </button>
        </form>
      </div>
    </div>
  );
};
export default MainContact;
