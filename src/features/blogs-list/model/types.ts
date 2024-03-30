interface BlogListElement {
  id: string;
  name: string;
  description: string;
}

interface CreateListElementCommand {
  name: string;
  description: string;
}

interface DeleteBligListElementCommand {
  id: string;
}
