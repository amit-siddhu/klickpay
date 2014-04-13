# encoding: utf-8
class KlickPay < Sinatra::Application
  get '/KlickPay/searches' do
    format_response(Search.all, request.accept)
  end

  get '/KlickPay/searches/:id' do
    entity ||= Search.find(params[:id]) || halt(404)
    format_response(entity, request.accept)
  end

  post '/KlickPay/searches' do
    body = MultiJson.load request.body.read
    entity = Search.create(
      
      keyword: body['keyword'],
      
    )
    status 201
    format_response(entity, request.accept)
  end

  put '/KlickPay/searches/:id' do
    body = MultiJson.load request.body.read
    entity ||= Search.find(params[:id]) || halt(404)
    halt 500 unless entity.update(
      
      keyword: body['keyword'],
      
    )
    format_response(entity, request.accept)
  end

  delete '/KlickPay/searches/:id' do
    entity ||= Search.find(params[:id]) || halt(404)
    halt 500 unless entity.destroy
    status 204
  end
end
