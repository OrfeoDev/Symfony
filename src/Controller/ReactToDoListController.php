<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ReactToDoListController extends AbstractController
{
    #[Route('/reacttodolist', name: 'react_to_do_list')]
    public function index(): Response
    {
        return $this->render('react_to_do_list/index.html.twig', [
            'controller_name' => 'ReactToDoListController',
        ]);
    }
}
