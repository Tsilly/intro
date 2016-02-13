create_user = User.create

create_articles = 
  for i in 1..5 do
    Article.create title: 'No.{i}. Lorem ipsum Non commodo et ex nulla officia.', text: 'Lorem ipsum Labore sunt adipisicing deserunt nulla ea dolor aute officia magna irure sed.'                   
  end