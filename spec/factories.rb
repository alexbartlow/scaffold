Factory.define(:task) do |t|
  t.name "New Task"
  t.due_date {1.month.from_now}
  t.description "Some task description"
end
