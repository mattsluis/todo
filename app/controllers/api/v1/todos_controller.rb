class Api::V1::TodosController < Api::V1::BaseController
    def index
        respond_with Todo.all
    end

    def create
        puts "creating.. params: #{todo_params}"
        respond_with :api, :v1, Todo.create(todo_params)
        puts "success"
    end

    def destroy
        respond_with Todo.destroy(params[:id])
    end

    def update
        todo = Todo.find(params["id"])
        todo.update_attributes(todo_params)
        respond_with todo, json: todo
    end

    private
    def todo_params
        params.require(:todo).permit(:id, :title, :description, :finished)
    end
end
