<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ToDolistController extends AbstractController
{
    #[Route('/todolist', name: 'to_dolist')]

    public function index(): Response
    {
        return $this->render('to_dolist/index.html.twig', [
            'controller_name' => 'ToDolistController',
        ]);
    }
}
