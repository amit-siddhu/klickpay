# encoding: utf-8
class KlickPay < Sinatra::Application
  get '/KlickPay/keywords' do
    format_response(Keyword.all, request.accept)
  end

  get '/KlickPay/keywords/:id' do
    entity ||= Keyword.find(params[:id]) || halt(404)
    format_response(entity, request.accept)
  end

  post '/KlickPay/keywords' do
    body = MultiJson.load request.body.read
    entity = Keyword.create(
      
      keyword1: body['keyword1'],
      
      keyword2: body['keyword2'],
      
      keyword3: body['keyword3'],
      
      keyword4: body['keyword4'],
      
      keyword5: body['keyword5'],
      
      keyword6: body['keyword6'],
      
      keyword7: body['keyword7'],
      
      keyword8: body['keyword8'],
      
    )
    status 201
    format_response(entity, request.accept)
  end

  put '/KlickPay/keywords/:id' do
    body = MultiJson.load request.body.read
    entity ||= Keyword.find(params[:id]) || halt(404)
    halt 500 unless entity.update(
      
      keyword1: body['keyword1'],
      
      keyword2: body['keyword2'],
      
      keyword3: body['keyword3'],
      
      keyword4: body['keyword4'],
      
      keyword5: body['keyword5'],
      
      keyword6: body['keyword6'],
      
      keyword7: body['keyword7'],
      
      keyword8: body['keyword8'],
      
    )
    format_response(entity, request.accept)
  end

  delete '/KlickPay/keywords/:id' do
    entity ||= Keyword.find(params[:id]) || halt(404)
    halt 500 unless entity.destroy
    status 204
  end
end
