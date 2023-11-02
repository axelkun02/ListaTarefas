import { Component } from '@angular/core';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent {
  tarefas: any[] = [
    { descricao: 'Tarefa 1', concluida: false },
    { descricao: 'Tarefa 2', concluida: true },
    { descricao: 'Tarefa 3', concluida: false },
    { descricao: 'Tarefa 4', concluida: true },
    { descricao: 'Tarefa 5', concluida: false }
  ];

  toggleConcluida(tarefa: any) {
    tarefa.concluida = !tarefa.concluida;
  }
}