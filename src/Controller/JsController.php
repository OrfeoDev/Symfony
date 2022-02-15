<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class JsController extends AbstractController
{
    #[Route('/js', name: 'js')]
    public function index(): Response
    {
        return $this->render('js/js.html.twig', [
            'controller_name' => 'JsController',
        ]);
    }
}
